require 'rest-client'

puts "Type in a search query:"
query = gets.chomp.split(" ").join("+")

puts RestClient.get("http://www.google.com/#q=" + query)