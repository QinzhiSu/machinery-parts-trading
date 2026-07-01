CREATE TABLE `favorites` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`partId` varchar(255) NOT NULL,
	`partName` text,
	`brand` varchar(100),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `favorites_id` PRIMARY KEY(`id`),
	CONSTRAINT `unique_user_part` UNIQUE(`userId`,`partId`)
);
--> statement-breakpoint
CREATE INDEX `userId_idx` ON `favorites` (`userId`);