package main

import (
	"log"
	"net/http/httputil"
	"net/url"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var APIKEY = os.Getenv("OPENAI_API_KEY")

func main() {
	// Create Gin instance
	r := gin.Default()

	// Enable CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"},
		AllowHeaders: []string{"Origin", "Content-Length", "Content-Type", "Authorization"},
	}))

	// Define route, proxy OpenAI API
	r.POST("/v1/chat/completions", func(c *gin.Context) {
		// extract OpenAI API URL
		// e.g https://api.openai.com/v1/chat/completions
		targetUrl, err := url.Parse("https://api.openai.com")
		if err != nil {
			log.Fatal(err)
		}

		// Create reverse proxy, and forward request to OpenAI API
		proxy := httputil.NewSingleHostReverseProxy(targetUrl)
		// Set proxy request header, add the key saved in gateway to request header
		c.Request.Header.Set("Authorization", APIKEY)
		proxy.ServeHTTP(c.Writer, c.Request)
	})

	// Launch Gin instance, and listen on port 8080 with TLS
	//if err := r.RunTLS(":8080", "cert.pem", "key.pem"); err != nil {
	//	log.Fatal(err)
	//}
	// Launch Gin instance, and listen on port 8080
	if err := r.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}

// Caddy example:
// example.com {
//   proxy /api localhost:4000 {
//     transparent
// }
//   proxy / localhost:3000 {
//     transparent
// }
//}
