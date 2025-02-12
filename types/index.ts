export type MaleProfile = {
  id: string;
  title: string;
  slug: string;
  profile: {
    fullName: string;
    price: number;
    bio: string;
    profileOutfits: string[];
    profileState: string;
    gallery: {
      nodes: {
        altText: string | null;
        id: string;
        mediaItemUrl: string;
      }[];
    };
    profileImage: {
      node: {
        mediaItemUrl: string;
        altText: string | null;
      };
    };
  };
  identity: {
    city: string;
    state: string;
    area: string;
  };
};

export type GetMalesResponse = {
  males: {
    nodes: MaleProfile[];
  };
};
