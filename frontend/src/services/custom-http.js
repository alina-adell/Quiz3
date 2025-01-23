export class CustomHttp {
    static async request(url, method = "GET", body = null) {

        const params = {
            method: method,
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            }
        };

        if (body) {
            params.body = JSON.stringify(body);
        }

        const response = await fetch(url, params);

        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.message);
        }

        return await response.json();
    }
}