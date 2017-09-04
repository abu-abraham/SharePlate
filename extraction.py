from lxml import html

import requests
import re

#To extract about 65000 words and to a file from MENULOG
def parse_website_for_items(restaurant):
    page = requests.get(restaurant)
    tree = html.fromstring(page.content)
    items = tree.xpath('//h4/text()')
    items = filter(lambda x: not x.isspace(), items)
    file = open("food_items","a+");
    content = str(items);
    final_list = [];
    content_list = str(content).split(",");
    for line in content_list:
        line = line.translate(None, " ?.'!/\;:")
        final_list.append(line);
        final_list.append("\n");
    file.write(str(final_list))

def edit_file():
    final_list = [];
    with open('food_items') as f:
        content = f.readlines()
    content_list = str(content).split(",");
    for line in content_list:
        line = line.translate(None, " ?.'!/\;:")
        line = re.findall('[A-Z][^A-Z]*', line)
        line = " ".join(line)
        final_list.append(line);
    final_list = set(final_list)
    f.close();
    file = open("food_items","w");
    file.write(str(final_list))
    file.close()
    print len(final_list)

def parse_website_for_restaurants(area):
    page = requests.get(area);
    tree = html.fromstring(page.content)
    items = tree.xpath('//h2/a/@href')
    for item in items:
        parse_website_for_items("https://www.menulog.com.au/"+str(item))

edit_file()


#parse_website_for_restaurants("https://www.menulog.com.au/takeaway/sydney-cbd")
# parse_website_for_restaurants("https://www.menulog.com.au/takeaway/canberra")
# parse_website_for_restaurants("https://www.menulog.com.au/takeaway/waterloo")
# parse_website_for_restaurants("https://www.menulog.com.au/takeaway/melbourne")

