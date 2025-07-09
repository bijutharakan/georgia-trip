#\!/bin/bash

# New replacement URLs to check
urls=(
"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1609001950969-66b25e3e9f9f?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1609949268000-150f6e3cbb40?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1609000351756-c2011e9f9239?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1609001950650-b4b99b92f4f1?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1565264297366-f520dbbb27fa?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1506973130519-3b6a0caecd3f?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1590333748338-d629e4564ad9?w=400&auto=format&fit=crop&q=60"
)

echo "Checking replacement image URLs..."
echo "=================================="

for url in "${urls[@]}"; do
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$status" == "200" ]; then
        echo "✓ OK ($status): $url"
    else
        echo "✗ ERROR ($status): $url"
    fi
done
