import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context){
    return rss({
        title: 'Astro Leaner | Blog',
        description: 'My journey leanring Astro',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`
    });
}