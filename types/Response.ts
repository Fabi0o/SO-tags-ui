type Tag = {
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  name: string;
};

type Response = {
  has_more: boolean;
  items: Tag[];
  quota_max: number;
  quota_remaining: number;
};

export type { Tag, Response };
