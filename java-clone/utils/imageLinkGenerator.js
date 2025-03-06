export default function GenerateImageLink({ src, width, quality }) {
    const domainName = "https://d309if03i5q6p6.cloudfront.net/";
    return `${domainName}${src}?w=${width || 8000}&q=${quality || 75}`;
}




// generateImageLink("/icons/hello.jpg")