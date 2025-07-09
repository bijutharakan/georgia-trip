#!/bin/bash

# List of all image URLs from the HTML file
urls=(
"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1527004760902-426d5e7aaf50?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1553531889-3836a7ee6d3f?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1559070135-f259b369bf87?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1565299715199-866c917206bb?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1565799621233-dc4073ba3e50?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1585153560860-c59c21ac5c3e?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1590079019111-1f19ab6a0e0d?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1597007066704-67bf2068d5b3?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1598969435406-f3c58d97a2d2?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1609003738125-ece38f5f4af9?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1609948543911-52058cf52dfe?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1611007663176-a57c49cdc9fc?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1611007663205-38a6824b2321?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1611348524140-53c9914b7e72?w=400&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=800&auto=format&fit=crop&q=60"
"https://images.unsplash.com/photo-1631534933773-aa30c1a761ee?w=400&auto=format&fit=crop&q=60"
)

echo "Checking all image URLs..."
echo "=========================="

for url in "${urls[@]}"; do
    # Use curl to check HTTP status
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$status" == "200" ]; then
        echo "✓ OK ($status): $url"
    else
        echo "✗ ERROR ($status): $url"
    fi
done