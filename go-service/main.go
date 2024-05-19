package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	secretMap := map[string]string{
		"API_KEY":     "12345",
		"DB_PASSWORD": "database password",
	}
	envKeys := os.Getenv("SECRET_KEYS")
	if envKeys == "" {
		fmt.Println("no secret keys provided")
		os.Exit(1)
	}
	keys := strings.Split(envKeys, ",")

	fileContent := ""

	for _, key := range keys {
		if value, ok := secretMap[key]; ok {
			fileContent += fmt.Sprintf("%s=%s\n", key, value)
		}
	}
	err := os.WriteFile("/etc/env/app.env", []byte(fileContent), 0644)
	if err != nil {
		fmt.Printf("Error writing to file :%v", err)
		os.Exit(1)
	}
}
