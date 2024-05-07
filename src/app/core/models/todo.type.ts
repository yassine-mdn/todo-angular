export interface Todo {
  id:             string;
  collectionId:   string;
  collectionName: string;
  created:        Date;
  updated:        Date;
  item:           string;
  creator_id:     string;
  is_completed:   boolean;
  is_important:   boolean;
}

export interface TodoRequest {
  item:         string;
  creator_id:   string;
  is_completed: boolean;
  is_important: boolean;
}
