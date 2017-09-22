from __future__ import division
from fuzzywuzzy import fuzz
import enchant
import sys
sys.path.append("/home/abu/Documents/Personal/SharePlate/data")


def remove_decorative_words(food_item):
    decorative_list = ['yummy','amazing','tasty','beautiful','delightful','exuberant','healthy','magnificent','plain','rich']
    return_word = ""
    for word in food_item.split():
        if word not in decorative_list:
            return_word = return_word+word
    return return_word


def cusine_mapper(food_item):
    file_object  = open("/home/abu/Documents/Personal/SharePlate/data/cusine_list", "r");
    content = file_object.readlines();
    file_object.close()
    print content
    food_item = food_item.lower()
    food_item = remove_decorative_words(food_item)
    cluster = "";
    prob_item_cusine = {};
    cuisine_length_map = {};
    cuisine_list = [];
    total_items = 0;
    total_dish = 1; #To avoid division by 0
    for cuisine in content:
        c = 0;
        with open("/home/abu/Documents/Personal/SharePlate/data/"+str(cuisine).strip()) as f:
            cuisine_list.append(str(cuisine).strip());
            content = f.readlines();
            content = list(content);
            for item in content:
                if  fuzz.token_set_ratio(food_item,str(item).lower()) > 50:
                    c+=1;
            prob_item_cusine[str(cuisine).strip()] = c;
            total_dish+=c;
            cuisine_length_map[str(cuisine).strip()] = len(content);
            total_items += len(content)
        f.close()
    prob_cuisine_item = {}
    max = 0;
    result = "";
    for cuisine in cuisine_list:
        prob_cuisine_item[cuisine] = prob_item_cusine[cuisine]*(cuisine_length_map[cuisine]/(total_items))
        if prob_cuisine_item[cuisine] > max:
            print "MAX"
            max = prob_cuisine_item[cuisine]
            result = cuisine;
    return result





##TODO : MAP EACH ITEM TO NEAREST ONE AND THEN MAP STUFF LIKE BUTTER CHICKN TO MURG MAKHANI -- BING SEARCH
