apiKey = ""
apiSecret = ""
apiToken =  ""

jsonFileLoad = json.loads(json.dumps({"name":"Noah's NFT","description":"This is for class","image":'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg'},indent=4))

print(jsonFileLoad)
with open("test.json", "w") as outfile:
    json.dump(jsonFileLoad, outfile)
print("hello")
# Example 1
# all_files: tp.List[str] = get_all_files("")
# files = {"file": [(file, open(file, "rb")) for file in all_files]}


# Example 2
# all_files = ['test.json']
# files = {"file": [(file, open(file, "rb")) for file in all_files]}

# Example 3
files = [
   ("file", ("test.json", open('test.json', "rb")))
]

print ("Files used: \n")
print (files)

headers = {
    'pinata_api_key': "",
    'pinata_secret_api_key': "",
    'content-type':'application/json'
}

ipfs_url = "https://api.pinata.cloud/pinning/pinJSONToIPFS"

response: requests.Response = requests.post(url=ipfs_url, json=jsonFileLoad, headers=headers)
print(response.json())