import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlogPreviewBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blog_preview_blocks';
  info: {
    displayName: 'Blog Preview Block';
  };
  attributes: {
    previewLimit: Schema.Attribute.Integer;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface BlocksContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_blocks';
  info: {
    displayName: 'Content Block';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFaqAccordionBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_accordion_blocks';
  info: {
    displayName: 'Faq Accordion Block';
  };
  attributes: {
    questions: Schema.Attribute.Component<'elements.faq-item', true>;
  };
}

export interface BlocksHeroBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_blocks';
  info: {
    displayName: 'Hero Block';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media;
    heading: Schema.Attribute.String;
    subtext: Schema.Attribute.String;
  };
}

export interface BlocksServiceCardsBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_cards_blocks';
  info: {
    displayName: 'Service Cards Block';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.service-card', true>;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface BlocksTeamGridBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_grid_blocks';
  info: {
    displayName: 'Team Grid Block';
  };
  attributes: {
    members: Schema.Attribute.Component<'elements.team-member', true>;
  };
}

export interface ElementsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_elements_contact_infos';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
  };
}

export interface ElementsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_items';
  info: {
    displayName: 'Faq Item';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.String;
  };
}

export interface ElementsLabelLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_label_links';
  info: {
    displayName: 'Label Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    sublinks: Schema.Attribute.Component<'elements.label-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    image: Schema.Attribute.Media;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Youtube']
    >;
    url: Schema.Attribute.String;
  };
}

export interface ElementsSubLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_sub_links';
  info: {
    description: '';
    displayName: 'Sub Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_elements_team_members';
  info: {
    displayName: 'Team Member';
  };
  attributes: {
    image: Schema.Attribute.Media;
    jobTitle: Schema.Attribute.String;
    name: Schema.Attribute.String;
    profileUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.blog-preview-block': BlocksBlogPreviewBlock;
      'blocks.content-block': BlocksContentBlock;
      'blocks.faq-accordion-block': BlocksFaqAccordionBlock;
      'blocks.hero-block': BlocksHeroBlock;
      'blocks.service-cards-block': BlocksServiceCardsBlock;
      'blocks.team-grid-block': BlocksTeamGridBlock;
      'elements.contact-info': ElementsContactInfo;
      'elements.faq-item': ElementsFaqItem;
      'elements.label-link': ElementsLabelLink;
      'elements.service-card': ElementsServiceCard;
      'elements.social-link': ElementsSocialLink;
      'elements.sub-link': ElementsSubLink;
      'elements.team-member': ElementsTeamMember;
    }
  }
}
