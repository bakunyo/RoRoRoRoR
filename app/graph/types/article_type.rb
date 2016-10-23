ArticleType = GraphQL::ObjectType.define do
  name "Article"
  description "An Article"

  field :title, types.String
  field :body, types.String
  field :comments, types[CommentType]
end
