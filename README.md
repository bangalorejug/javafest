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

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/bangalorejug/javafest/issues). Write in the issue comment that you want to pick it, if you can't assign yourself.
3. Create a branch for your edits.
4. Please add issue number to your commit message.
5. Propose a Pull Request to `main` branch containing issue number and issue title.
6. Reference any relevant issues or other information in your PR.
7. Wait for review and adjust your PR according to it.
8. Congrats! Your PR should now be merged in!

If you can't handle some parts of the issue then please ask for help in the comment. If you have any problems during the implementation of some complex issue, feel free to implement just a part of it.


    
# The license

The site code is released under the Apache v2.0 License. Check <a href="https://github.com/bangalorejug/javafest/blob/main/LICENSE" target="_blank">LICENSE</a> for more details.
