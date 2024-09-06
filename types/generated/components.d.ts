import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionRichtext extends Schema.Component {
  collectionName: 'components_section_richtexts';
  info: {
    displayName: 'richtext';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    paragraph: Attribute.String;
    richtext_button: Attribute.Component<'blocks.button', true>;
  };
}

export interface SectionImageBanner extends Schema.Component {
  collectionName: 'components_section_image_banners';
  info: {
    displayName: 'Image banner';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface BlocksRichtextButton extends Schema.Component {
  collectionName: 'components_blocks_richtext_buttons';
  info: {
    displayName: 'richtext_button';
  };
  attributes: {};
}

export interface BlocksButton extends Schema.Component {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    ButtonText: Attribute.String;
    ButtonURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.richtext': SectionRichtext;
      'section.image-banner': SectionImageBanner;
      'blocks.richtext-button': BlocksRichtextButton;
      'blocks.button': BlocksButton;
    }
  }
}
