export type CoverFormatKey = "large" | "small" | "thumbnail" | "medium";
export type CoverFormat = {
  url: string;
};
export type Cover = {
  documentId: string;
  formats: Record<CoverFormatKey, CoverFormat>;
};

type BlockTypeRichText = {
  __component: "shared.rich-text",
  body: string
}

type BlockTypeRichMedia = {
  __component: "shared.media",
  file: {
    name: string
    id: string
    mime: string 
    url: string
  }
}

export type BlockType = BlockTypeRichText | BlockTypeRichMedia

export type Article = {
  documentId: string;
  title: string;
  description: string;
  cover: Cover;
  publishedAt: string;
  blocks: BlockType[]
};
