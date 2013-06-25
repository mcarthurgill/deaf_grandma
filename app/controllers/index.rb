get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end
 
post '/grandma' do
  @input = params[:user_input]
  case @input
	  when "BYE GRANDMA" then redirect to('/?grandma=TIL NEXT TIME, SWEETIE!')
	  when @input.upcase then redirect to('/?grandma=NO, NOT SINCE 1945!')
	  else redirect to('/?grandma=WHAT?! SPEAK UP, KIDDO!')
  end
end
