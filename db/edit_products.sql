UPDATE inventory
SET image_url = $2
WHERE id = $1;