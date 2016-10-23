CommentType = GraphQL::ObjectType.define do
  name "Comment"
  description "A Comment"

  field :body, types.String
  field :article do
    type ArticleType
    resolve -> (obj, args, ctx) {
      obj.article
    }
  end
end
