import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dataDirectory = path.join(process.cwd(), 'data');

export function getSortedPostsData() {
  // Get file names under /data
  const fileNames = fs.readdirSync(dataDirectory);
  const allContentData = fileNames.map((fileName) => {

    // Read markdown file as string
    const fullPath = path.join(dataDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the data metadata
    const matterResult = matter(fileContents);

    return {
      ...matterResult.data,
    };
  });
  
  return allContentData;
}