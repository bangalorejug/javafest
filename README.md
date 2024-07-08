# [JAVAFEST](https://javafest.org/) Conference Website
![image](https://github.com/adityasharma7/javafest/assets/15027245/bc489910-8805-4d60-93f8-542a5635c4b5)


This is the repository used to build and publish the official JAVAFEST website.

## Quick start
We use [Hugo](https://gohugo.io/) to build and render the site. 

### Run development server using Docker
```
docker run --rm -it -v $(pwd):/src -p 1313:1313 klakegg/hugo server -D
```

### Run development server using [Hugo wrapper](https://github.com/khos2ow/hugo-wrapper)
```sh
./hugow --get-extended --get-latest
./hugow server
```

### Run development server using Hugo installed locally

Please refer to the below official instructions to install locally and run the server.

[Official Hugo installation instructions](https://gohugo.io/installation/)

```hugo server```
