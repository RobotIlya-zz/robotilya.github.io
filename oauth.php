<?php

//This creates a reandom number for STEP 2
function getRandomHex($num_bytes=4) {
  return bin2hex(openssl_random_pseudo_bytes($num_bytes));
}

//STEP 2. This take the original info posted form step 1 and creats an array with a random num for state
if ('POST' == $_SERVER['REQUEST_METHOD']) {
	$store_name = $_POST['my_name'];
	$params = array('client_id' => '0c0fdba2a5c1232e0df3437d28b80dd2',
					'redirect_uri' => "https://box.mymindseye.ca/app_sign_in.php",
					'response_type' => 'code',
					'scope' => 'read_products',
					'state' => getRandomHex(10));
	$url = "https://" . $store_name . ".myshopify.com/admin/oauth/authorize?" . http_build_query($params);
	header("Location:" . $url);
//STEP 3. This takes the return of the temp access code and creates a POST request for the final code which become $c
} elseif (!empty($_GET['code'])) {
	parse_str($_SERVER['QUERY_STRING'], $query);
	print_r($query);
	// need to add verify data 
	$auth_data = array('client_id' => '0c0fdba2a5c1232e0df3437d28b80dd2','client_secret' => 'ee51471f2815f5acbe813511482f161b','code' => $query['code']);
    $url = "https://" . $query['shop'] . "/admin/oauth/access_token";
    print_r($auth_data);
    $json_auth_data = json_encode($auth_data);
    $c = curl_init($url);
    curl_setopt($c, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
    curl_setopt($c, CURLOPT_POSTFIELDS, $json_auth_data);                                                                  
    curl_setopt($c, CURLOPT_RETURNTRANSFER, true);                                                                      
    curl_setopt($c, CURLOPT_HTTPHEADER, array(                                                                          
        'Content-Type: application/json',                                                                                
        'Content-Length: ' . strlen($json_auth_data))                                                                       
    );                           
    print curl_exec($c);
//STEP 1.  This takes the store name and posts it back to the app for step 2
} else {
	print <<<_HTML_
<form method="post" action="$_SERVER[PHP_SELF]">
Input Twitch username: <input type="text" name="my_name" />
<br />
<button type="submit">Install</button>
</form>
_HTML_;
}

?>