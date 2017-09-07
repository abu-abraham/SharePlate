from __future__ import division
with open('cusine_list') as f:
    content = f.readlines();
f.close()

food_item = "Grilled Chicken"
food_item = food_item.lower()
max = 0;
cluster = "";
for cuisine in content:
    c = 0;
    with open(str(cuisine).strip()) as f:
        content = f.readlines();
        content = list(content);
        for item in content:
            if food_item in str(item).lower():
                c+=1;
        if (c/len(content)) > max:
            cluster = cuisine
            max = c/len(content)
    f.close()

print cluster


##TODO : IMPROVE INCORPORATING DOC_ANALYSIS LESSONS
