from models import Foodlist
from models import Users
from models import Purchases

def spice_preference(user_id):
    user = Users.objects.get(uid=user_id)
    historical_buys = Purchases.objects.filter(user=user).values()
    if len(historical_buys) == 0:
        return 0;
    sp_level = 0;
    for buy in historical_buys:
        try:
            food = Foodlist.objects.get(item_id=283); #buy
            sp_level = sp_level+food.spice_level
        except:
            pass
    return sp_level/len(historical_buys)


def get_sorted_list(values,level):
    A = {}
    for index, item in enumerate(values):
        A.setdefault(abs(item['spice_level']-level),[]).append(index)
    i=0
    sorted_val = []
    keylist = A.keys()
    keylist.sort()
    for key in keylist:
        for index in A[key]:
            sorted_val.append(values[index])
    return sorted_val



def user_cusine_scores(user_id):
    user = Users.objects.get(uid=user_id)
    historical_buys = Purchases.objects.filter(user=user).values()
    #create A filled with 0
    if len(historical_buys) == 0:
        return None
    sp_level = 0;
    cusine_map = {}
    for buy in historical_buys:
        try:
            food = Foodlist.objects.get(item_id=283); #buy
            print food.cusine
            if cusine_map.get(food.cusine):
                print "Here"
                cusine_map[food.cusine] = (cusine_map[food.cusine] + 1)
            else:
                cusine_map[food.cusine] = 0;
        except:
            pass


    print cusine_map
