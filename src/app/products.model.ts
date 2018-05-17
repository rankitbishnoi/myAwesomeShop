export class Product {
  public _id: string;
  public desc: string;
  public images: string[];
  public mark_price: number;
  public name: string;
  public sale_msg: string;
  public sale_price: number;

  constructor(
    _id: string,
    desc: string,
    images: string[],
    mark_price: number,
    name: string,
    sale_msg: string,
    sale_price: number
  ) {
    this._id = _id;
    this.desc = desc;
    this.images = images;
    this.mark_price = mark_price;
    this.name = name;
    this.sale_msg = sale_msg;
    this.sale_price = sale_price;
  }
}

export class ProductDetails {
  public success: number;
  public primary_product: {
    _id: string,
    desc: string,
    images: string[],
    mark_price: number,
    name: string,
    sale_msg: string,
    sale_price: number
  };
  public attributes: {
    _id: string,
    name: string
  }[];
  public options: {
    _id: string,
    attrib_id: string,
    name: string
  }[];
  public product_variations: {
    _id: string,
    images: string[],
    mark_price: number,
    name: string,
    sale_msg: string,
    sale_price: number,
    sign: string[]
  }[];
  public selected_option_ids: string[];

  constructor(
    success: number,
    primary_product: {
    _id: string,
    desc: string,
    images: string[],
    mark_price: number,
    name: string,
    sale_msg: string,
    sale_price: number
  },
    attributes: {
      _id: string,
      name: string
    }[],
    options: {
      _id: string,
      attrib_id: string,
      name: string
    }[],
    product_variations: {
      _id: string,
      images: string[],
      mark_price: number,
      name: string,
      sale_msg: string,
      sale_price: number,
      sign: string[]
    }[],
    selected_option_ids: string[]
  ) {
    this.success = success;
    this.primary_product = primary_product;
    this.attributes = attributes;
    this.options = options;
    this.product_variations = product_variations;
    this.selected_option_ids = selected_option_ids;
  }
}
