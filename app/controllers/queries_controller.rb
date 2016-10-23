class QueriesController < ApplicationController
  def create
    query_string = params[:query]
    query_variables = params[:variables] || {}
    result = ArticleSchema.execute(query_string, variables: query_variables)
    render json: result
  end
end
