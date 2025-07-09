#\!/bin/bash

# Common travel/landscape themed URLs
urls=(
"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1548834925-e48f6a8f6b0a?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?w=400&auto=format&fit=crop&q=60"
)

echo "Testing common travel-themed URLs..."
echo "===================================="

for url in "${urls[@]}"; do
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$status" == "200" ]; then
        echo "✓ OK ($status): $url"
    else
        echo "✗ ERROR ($status): $url"
    fi
done
