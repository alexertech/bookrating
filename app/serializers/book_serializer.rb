class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :slug
end