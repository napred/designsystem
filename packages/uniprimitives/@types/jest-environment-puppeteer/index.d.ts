interface Page {
  setContent(html: string): Promise<void>;
  screenshot(): Promise<any>;
}

declare global {
  const page: Page;
}

export {};
