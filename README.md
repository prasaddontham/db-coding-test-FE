# Note that the given REST andpoints (https://restcountries.eu/rest/v2/region/europe & https://restcountries.eu/rest/v2/region/asia are unable to respond
So, I have used working endpoints below

https://restcountries.com/v2/...

# Have created the skeleton of Angular folder structure first and created necessary components in it.
# Components list
1. Home Component - For home page which loads Region and Countries drop lists first.
2. Regions component - For region and countries droplists
3. Country Component - It is for  country details display purpose
4. cards component - It is for quick look of the country

- When the application loads, it contains only Region options(Asia, Europe) in the left most droplist and Countries droplist is with empty option list. 
- If any one Region is selected, then the second droplist will be loaded with country names of the selected Region. 
- If we choose any country from the second drop list, then country card will be loaded. It will have discrete information of the country.
- When we click on country card, it will take us to country details component.

# Improvemnets can be done if time permits:
- Country details display can be optimised like the coutry details will get stored in NGRX store and reading from there instead of calling Country service with full text mode.
