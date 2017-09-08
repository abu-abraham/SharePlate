from __future__ import division
from fuzzywuzzy import fuzz
import enchant


def dish_analyzer(input_text):
    input_text = input_text.split()
    result = []
    d = enchant.Dict("en_US")
    for word in input_text:
        if not d.check(str(word)):
            result.append(word);
            input_text = ""
    for word in result:
        input_text = input_text+word+" ";
    return input_text

def remove_decorative_words(food_item):
    decorative_list = ['yummy','amazing','tasty','beautiful','delightful','exuberant','healthy','magnificent','plain','rich']
    return_word = ""
    for word in food_item.split():
        if word not in decorative_list:
            return_word = return_word+word
    return return_word



with open('cusine_list') as f:
    content = f.readlines();
f.close()
food_item = "Yummy Butter Chicken"
food_item = food_item.lower()
food_item = remove_decorative_words(food_item)
max = 0;
cluster = "";
for cuisine in content:
    c = 0;
    with open(str(cuisine).strip()) as f:
        content = f.readlines();
        content = list(content);
        for item in content:
            if  fuzz.token_set_ratio(dish_analyzer(food_item),str(item).lower()) > 90:
                c+=1;
        if (c/len(content)) > max:
            cluster = cuisine
            max = c/len(content)
    f.close()

print cluster


##TODO : IMPROVE INCORPORATING DOC_ANALYSIS LESSONS
##TODO : MAP EACH ITEM TO NEAREST ONE AND THEN MAP STUFF LIKE BUTTER CHICKN TO MURG MAKHANI -- BING SEARCH
