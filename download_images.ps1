[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$images = @{
    "iphone-x.jpg" = "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg"
    "samsung-galaxy-m51.jpg" = "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg"
    "samsung-galaxy-m22.jpg" = "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg"
    "iphone-11.jpg" = "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-pro-max-256gb-didongviet_23.jpg"
    "iphone-13-pro-max.png" = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=470&hei=556&fmt=png-alpha"
    "iphone-14.jpg" = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896"
    "iphone-12.png" = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha"
    "samsung-galaxy-s22-ultra.jpg" = "https://images.samsung.com/is/image/samsung/p6pim/uk/2201/gallery/uk-galaxy-s22-ultra-s908-sm-s908bzkdbtu-530554754"
    "samsung-galaxy-s22-plus.jpg" = "https://images.samsung.com/is/image/samsung/p6pim/uk/2201/gallery/uk-galaxy-s22-s906-sm-s906bzkdbtu-530553752"
    "samsung-galaxy-s21.jpg" = "https://images.samsung.com/is/image/samsung/p6pim/uk/2101/gallery/uk-galaxy-s21-5g-g991-sm-g991bzvabtu-front-368882096"
    "samsung-galaxy-a53.jpg" = "https://images.samsung.com/is/image/samsung/p6pim/uk/sm-a536bzkabtu/gallery/uk-galaxy-a53-5g-sm-a536bzkabtu-531600393"
    "iphone-se.jpg" = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202203-starlight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1646781659671"
}

$client = New-Object System.Net.WebClient
$client.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")

foreach ($file in $images.Keys) {
    $outPath = Join-Path "asset/img" $file
    try {
        $client.DownloadFile($images[$file], $outPath)
        Write-Host "Downloaded $file successfully."
    } catch {
        Write-Warning "Failed to download $file: $_"
    }
}
$client.Dispose()
