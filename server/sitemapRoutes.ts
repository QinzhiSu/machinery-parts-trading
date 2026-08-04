/**
 * Sitemap Routes for Express Server
 * Provides XML sitemaps for search engine indexing
 */

import { Router } from 'express';
import {
  generateMainSitemap,
  generateBrandsSitemap,
  generateProductsSitemap,
  generateSearchSitemap,
  generateSitemapIndex,
} from './sitemap';

const router = Router();

/**
 * Main sitemap - high priority pages
 */
router.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.send(generateMainSitemap());
});

/**
 * Brand pages sitemap
 */
router.get('/sitemap-brands.xml', (req, res) => {
  res.type('application/xml');
  res.send(generateBrandsSitemap());
});

/**
 * Product pages sitemap
 */
router.get('/sitemap-products.xml', (req, res) => {
  res.type('application/xml');
  res.send(generateProductsSitemap());
});

/**
 * Search results sitemap
 */
router.get('/sitemap-search.xml', (req, res) => {
  res.type('application/xml');
  res.send(generateSearchSitemap());
});

/**
 * Sitemap index - references all sitemaps
 */
router.get('/sitemap-index.xml', (req, res) => {
  res.type('application/xml');
  res.send(generateSitemapIndex());
});

export default router;
