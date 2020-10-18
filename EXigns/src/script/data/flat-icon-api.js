class FlatIconApi {
    static searchIcon(keyword) {
        const baseUrl = "https://api.flaticon.com/v2";

        /* How to get token:
        * 1. Go to https://developer.flaticon.com/landing
        * 2. Get the Apikey and copy it
        * 3. Use postman with Url: https://api.flaticon.com/v2/app/authentication with method POST
        * 4. Use the body at postman with KEY named 'apikey' dan VALUE with the apikey from before
        * 5. Send it, and there will be a response with the token inside
        * 6. Copy the token dan paste it inside variable token below
        *     VVVVV     */

        const token = ``;

        const options = {
            method: "get",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        // limit for responsiveness
        let limit = 20;
        const w = window.innerWidth;
        if (w > 767 && w < 1024) {
            limit = 50;
        } else if (w > 1023) {
            limit = 100;
        }

        if (!keyword) {
            $("#title-box").fadeOut( () => {
                $("header").fadeIn();
            });
            return Promise.reject(`search box is empty`);
        } else {
            $("#loading").show();
            return fetch(`${baseUrl}/search/icons/priority?q=${keyword}&limit=${limit}`, options)
                .then(response => {
                    return response.json();
                })
                .then(responseJson => {
                    $("#loading").hide();
                    if (responseJson.metadata.count === 0 || responseJson.error) {
                        return Promise.reject(`${keyword} is not found`);
                    } else {
                        $("header").fadeOut( () => {
                            $("#title-box").fadeIn();
                        });
                        return Promise.resolve(responseJson.data);
                    }
                })
        }
    }
}
export default FlatIconApi;