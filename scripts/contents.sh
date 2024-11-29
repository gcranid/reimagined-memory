#!/bin/bash

# Set the output file
output_file="contents.txt"

# Clear the output file if it exists
> "$output_file"

# Define a divider
divider="/* **************************************************************************************************************** */"

# Get the name of this script to exclude it
script_name=$(basename "$0")

# Find all files in the 'src' directory excluding images and this script
find ./src -type f ! -name "$script_name" ! -name "$output_file" \
    ! -name "*.bk" ! -name "*.jpg" ! -name "*.json" ! -name "*.config*" \
    ! -name "*LICENSE*" ! -name "*.git*" ! -name "*.eslint*" ! -name "*.md" \
    ! -name "*.jpeg" ! -name "*.ico" ! -name "*.svg" ! -name "*.icns" \
    ! -name "*.png" ! -name "*.gif" ! -name "*.webp" | while read file; do

    # Add the divider
    # echo "$divider" >> "$output_file"

    # Add a blank line for readability
    # echo "" >> "$output_file"

    # Write the file path between quotes to the output file
    echo "/* $file */" >> "$output_file"

    # Add a blank line for readability
    echo "" >> "$output_file"

    # Write the content of the file to the output file
    cat "$file" >> "$output_file"

    # Add a blank line for readability
    echo "" >> "$output_file"
done

echo "All file paths and their contents from the 'src' directory (excluding images, the output file: '$output_file' and this script) have been written to $output_file."
