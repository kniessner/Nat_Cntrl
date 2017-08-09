import React from 'react';
import axios from 'axios';

 class WpApi {

    constructor() {
        const appUrl = 'http://kniessner.com/complex/'; // Wordpress installation url
        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
        this.mediaEndPoint = `${appUrl}/wp-json/wp/v2/media`; // Endpoint for getting Wordpress Posts

    }

    // Method for getting data from the provided end point url
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint,{
                            params: {
                              per_page: 100
                            }
                        })
                .then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    // Method for getting Pages data
    getPages(cb){
        this.api(this.pagesEndPoint).then((response)=>{
            console.log(response);
            this.getPosts(response, cb)
        });
        return true;
    }

    // Method for getting Posts data
    getPosts(pages, cb){
        this.api(this.postsEndPoint).then((response)=>{
            const posts     = response
            const payload   = { pages, posts };

            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }

    getMedia(cb){
        this.api(this.mediaEndPoint).then((response)=>{

                        this.getSuccess(payload); // Pass returned data to the store
                        cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }

    // This returnes an object with Pages and Posts data together
    // The Alt Store will listen for this method to fire and will store the returned data
    getSuccess(payload){
        return payload;
    }
}
