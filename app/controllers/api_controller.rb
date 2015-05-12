class ApiController < ApplicationController
  def random
  	random_palette = HTTParty.get('http://www.colourlovers.com/api/palettes/random')
  	render json: random_palette
  end
end
