export interface WebsiteConfig {
  title: string;
  description: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Comet Code',
  description: 'Guides and Tutorials for the modern developer',
  lang: 'en',
  siteUrl: 'https://cometcode.io',
  facebook: 'https://www.facebook.com/profile.php?id=100009515539064',
  twitter: 'https://twitter.com/caelin_sutch',
  googleSiteVerification: 'GoogleCode',
  footer: 'By Caelin Sutch',
};

export default config;
