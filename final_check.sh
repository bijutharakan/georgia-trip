#\!/bin/bash

echo "Final verification of all Unsplash URLs in updated HTML file:"
echo "============================================================="

broken_count=0
working_count=0

while IFS= read -r url; do
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$status" == "200" ]; then
        echo "✓ OK ($status): $url"
        ((working_count++))
    else
        echo "✗ ERROR ($status): $url"
        ((broken_count++))
    fi
done < /tmp/final_urls.txt

echo
echo "SUMMARY:"
echo "Working images: $working_count"
echo "Broken images: $broken_count"
echo "Total images: $((working_count + broken_count))"
