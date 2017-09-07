from lxml import html

import requests
import re

cuisine_restaurant_map = {};
#To extract about 65000 words and to a file from MENULOG
def parse_website_for_items(restaurant, file_name = "food_items"):
    page = requests.get(restaurant)
    tree = html.fromstring(page.content)
    items = tree.xpath('//h4/text()')
    items = filter(lambda x: not x.isspace(), items)
    file = open(file_name,"a+");
    content = str(items);
    final_list = [];
    content_list = str(content).split(",");
    for line in content_list:
        line = line.translate(None, " ?.'!/\;:")
        final_list.append(line);
        final_list.append("\n");
    file.write(str(final_list))

def edit_file(file_name):
    final_list = [];
    with open(file_name) as f:
        content = f.readlines()
    content_list = str(content).split(",");
    for line in content_list:
        line = line.translate(None, " ?.'!/\;:")
        line = re.findall('[A-Z][^A-Z]*', line)
        line = " ".join(line)
        final_list.append(line);
    final_list = set(final_list)
    f.close();
    file = open(file_name,"w");
    for item in final_list:
        file.write(str(item))
        file.write("\n")
    file.close()

def parse_website_for_restaurants(area):
    page = requests.get(area);
    tree = html.fromstring(page.content)
    items = tree.xpath('//div[@class="restaurantInfo"]/h2/a/@href')
    cuisine = tree.xpath('//div[@class="cuisines"]/text()')
    print len(items)
    print len(cuisine)
    cuisine = list(cuisine)
    items = list(items)
    for i in range(0,len(items)):
        if ',' in cuisine[i]:
            cuisine[i] = str(cuisine[i])[0:str(cuisine[i]).index(',')]
        cuisine_restaurant_map.setdefault(cuisine[i],[]).append(items[i])
    print "\n"
    # for item in items:
    #     parse_website_for_items("https://www.menulog.com.au/"+str(item))



parse_website_for_restaurants("https://www.menulog.com.au/takeaway/sydney-cbd")
parse_website_for_restaurants("https://www.menulog.com.au/takeaway/canberra")
parse_website_for_restaurants("https://www.menulog.com.au/takeaway/waterloo")
parse_website_for_restaurants("https://www.menulog.com.au/takeaway/melbourne")



for i in cuisine_restaurant_map:
    for restarant in cuisine_restaurant_map[i]:
        parse_website_for_items("https://www.menulog.com.au/"+str(restarant),str(i).strip())\
#edit_file()

for file in cuisine_restaurant_map:
    edit_file(str(file).strip())

f = open("cusine_list","w");
for file in cuisine_restaurant_map:
    f.write(str(file).strip())
    f.write("\n")
f.close()
