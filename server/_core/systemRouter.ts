import { z } from "zod";
import { notifyOwner } from "./notification";
import { adminProcedure, publicProcedure, router } from "./trpc";
import { invokeLLM } from "./llm";

export const systemRouter = router({
  health: publicProcedure
    .input(
      z.object({
        timestamp: z.number().min(0, "timestamp cannot be negative"),
      })
    )
    .query(() => ({
      ok: true,
    })),

  notifyOwner: adminProcedure
    .input(
      z.object({
        title: z.string().min(1, "title is required"),
        content: z.string().min(1, "content is required"),
      })
    )
    .mutation(async ({ input }) => {
      const delivered = await notifyOwner(input);
      return {
        success: delivered,
      } as const;
    }),

  translate: publicProcedure
    .input(
      z.object({
        text: z.string().min(1, "text is required"),
        targetLanguage: z.string().min(1, "targetLanguage is required"),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const response = await invokeLLM({
          messages: [
            {
              role: "system",
              content: `You are a professional translator. Translate the following text to ${input.targetLanguage}. Only return the translated text, nothing else.`,
            },
            {
              role: "user",
              content: input.text,
            },
          ],
        });

        let translation = response.choices[0]?.message?.content || input.text;

        if (Array.isArray(translation)) {
          translation = translation.map(item => {
            if (typeof item === 'object' && 'text' in item) {
              return item.text;
            }
            return '';
          }).join('');
        }

        return {
          translation,
          success: true,
        } as const;
      } catch (error) {
        console.error("Translation error:", error);
        return {
          translation: input.text,
          success: false,
        } as const;
      }
    }),
});
