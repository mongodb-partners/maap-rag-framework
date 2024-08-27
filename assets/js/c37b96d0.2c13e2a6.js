"use strict";(self.webpackChunkmaap_docs=self.webpackChunkmaap_docs||[]).push([[851],{5273:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});var r=s(4848),o=s(8453);const a={sidebar_position:2},d="Data Loaders",t={id:"app-modules/data-loader",title:"Data Loaders",description:"These data loaders facilitate the seamless integration of data into MongoDB's vector store, leveraging specific embedding models. They are designed to support the construction of gen AI application.",source:"@site/docs/app-modules/data-loader.md",sourceDirName:"app-modules",slug:"/app-modules/data-loader",permalink:"/maap-framework/docs/app-modules/data-loader",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Server",permalink:"/maap-framework/docs/app-modules/server"},next:{title:"User Interface (UI)",permalink:"/maap-framework/docs/app-modules/ui"}},i={},l=[{value:"Loaders with their usage",id:"loaders-with-their-usage",level:2},{value:"1. Confluence Loader",id:"1-confluence-loader",level:3},{value:"2. Docx Loader",id:"2-docx-loader",level:3},{value:"3. PDF Loader",id:"3-pdf-loader",level:3},{value:"4. PPT Loader",id:"4-ppt-loader",level:3},{value:"5. Sitemap Loader",id:"5-sitemap-loader",level:3},{value:"6. Web Loader",id:"6-web-loader",level:3},{value:"7. Youtube Channel Loader",id:"7-youtube-channel-loader",level:3},{value:"8. Youtube Loader",id:"8-youtube-loader",level:3},{value:"9. Youtube Search Loader",id:"9-youtube-search-loader",level:3},{value:"10. Folder MIME type Loader",id:"10-folder-mime-type-loader",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"data-loaders",children:"Data Loaders"}),"\n",(0,r.jsx)(n.p,{children:"These data loaders facilitate the seamless integration of data into MongoDB's vector store, leveraging specific embedding models. They are designed to support the construction of gen AI application."}),"\n",(0,r.jsx)(n.h2,{id:"loaders-with-their-usage",children:"Loaders with their usage"}),"\n",(0,r.jsxs)(n.p,{children:["Currently the following data loaders can be used with the MAAP Framework; The usage defines what values are required by the ",(0,r.jsx)(n.code,{children:"config.yaml"})," file to work with the loader. Multiple data sources can be used to ingest data by providing details of each."]}),"\n",(0,r.jsx)(n.h3,{id:"1-confluence-loader",children:"1. Confluence Loader"}),"\n",(0,r.jsx)(n.p,{children:"Used to load and ingest content directly from Confluence spaces by specifying the necessary credentials and configuration."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"ingest:\n   - source: confluence\n     space_names:\n     confluence_base_url:\n     confluence_username:\n     confluence_token:\n     chunk_size: 1000\n     chunk_overlap: 100\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"2-docx-loader",children:"2. Docx Loader"}),"\n",(0,r.jsx)(n.p,{children:"Utilized for extracting and processing content from Microsoft Word documents."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"ingest:\n   - source: docx\n     source_path:\n     chunk_size: 1000\n     chunk_overlap: 100\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"3-pdf-loader",children:"3. PDF Loader"}),"\n",(0,r.jsx)(n.p,{children:"Designed for loading and extracting text from PDF files."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"ingest:\n   - source: pdf\n     source_path:\n     chunk_size: 1000\n     chunk_overlap: 100\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"4-ppt-loader",children:"4. PPT Loader"}),"\n",(0,r.jsx)(n.p,{children:"Facilitates the extraction of content from PowerPoint presentations for further processing."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"ingest:\n   - source: ppt\n     source_path:\n     chunk_size: 1000\n     chunk_overlap: 100\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"5-sitemap-loader",children:"5. Sitemap Loader"}),"\n",(0,r.jsx)(n.p,{children:"Used for loading and processing sitemap files, typically for SEO purposes and navigation structure embedding."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"ingest:\n   - source: sitemap\n     source_path:\n     chunk_size: 1000\n     chunk_overlap: 100\n\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"6-web-loader",children:"6. Web Loader"}),"\n",(0,r.jsx)(n.p,{children:"Extracts and processes content from web pages or HTML files."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"ingest:\n   - source: web\n     source_path:\n     chunk_size: 1000\n     chunk_overlap: 100\n\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"7-youtube-channel-loader",children:"7. Youtube Channel Loader"}),"\n",(0,r.jsx)(n.p,{children:"Ingests content from a specified YouTube channel by channel ID, suitable for processing large amounts of video data."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"ingest:\n   - source: youtube-channel\n     channel_id:\n     chunk_size: 1000\n     chunk_overlap: 100\n    \n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"8-youtube-loader",children:"8. Youtube Loader"}),"\n",(0,r.jsx)(n.p,{children:"Extracts content from individual YouTube videos using their video ID or URL."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"ingest:\n   - source: youtube\n     video_id_or_url: <video_id_or_url>\n     chunk_size:   1000\n     chunk_overlap: 100\n    \n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"9-youtube-search-loader",children:"9. Youtube Search Loader"}),"\n",(0,r.jsx)(n.p,{children:"Facilitates content extraction from the results of YouTube searches based on specified queries."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"ingest:\n   - source: youtube-search\n     query: <query>\n     chunk_size: 1000\n     chunk_overlap: 100\n    \n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"10-folder-mime-type-loader",children:"10. Folder MIME type Loader"}),"\n",(0,r.jsx)(n.p,{children:"Loads and processes content from a specified folder on the local file system. Automatically detects and processes supported file types.\ni.e. PDF, PPTX, DOCX, TXT"}),"\n",(0,r.jsx)(n.p,{children:"The file type filter is an optional field. If filter is not provided then the loader will process all the supported file type files in the folder."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"ingest:\n   - source: 'folder'\n     source_path: '/path/to/folder'\n     file_type: <'pdf'| 'txt' | 'pptx' | 'docx'> \n     chunk_size: 1000\n     chunk_overlap: 100\n    \n"})}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var r=s(6540);const o={},a=r.createContext(o);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);