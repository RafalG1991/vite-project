/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WrapperImport } from './routes/_wrapper'
import { Route as SplatImport } from './routes/$'
import { Route as IndexImport } from './routes/index'
import { Route as WrapperPostsImport } from './routes/_wrapper/posts'
import { Route as WrapperPostsPostIdImport } from './routes/_wrapper/posts.$postId'

// Create/Update Routes

const WrapperRoute = WrapperImport.update({
  id: '/_wrapper',
  getParentRoute: () => rootRoute,
} as any)

const SplatRoute = SplatImport.update({
  path: '/$',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const WrapperPostsRoute = WrapperPostsImport.update({
  path: '/posts',
  getParentRoute: () => WrapperRoute,
} as any)

const WrapperPostsPostIdRoute = WrapperPostsPostIdImport.update({
  path: '/$postId',
  getParentRoute: () => WrapperPostsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$': {
      id: '/$'
      path: '/$'
      fullPath: '/$'
      preLoaderRoute: typeof SplatImport
      parentRoute: typeof rootRoute
    }
    '/_wrapper': {
      id: '/_wrapper'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof WrapperImport
      parentRoute: typeof rootRoute
    }
    '/_wrapper/posts': {
      id: '/_wrapper/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof WrapperPostsImport
      parentRoute: typeof WrapperImport
    }
    '/_wrapper/posts/$postId': {
      id: '/_wrapper/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof WrapperPostsPostIdImport
      parentRoute: typeof WrapperPostsImport
    }
  }
}

// Create and export the route tree

interface WrapperPostsRouteChildren {
  WrapperPostsPostIdRoute: typeof WrapperPostsPostIdRoute
}

const WrapperPostsRouteChildren: WrapperPostsRouteChildren = {
  WrapperPostsPostIdRoute: WrapperPostsPostIdRoute,
}

const WrapperPostsRouteWithChildren = WrapperPostsRoute._addFileChildren(
  WrapperPostsRouteChildren,
)

interface WrapperRouteChildren {
  WrapperPostsRoute: typeof WrapperPostsRouteWithChildren
}

const WrapperRouteChildren: WrapperRouteChildren = {
  WrapperPostsRoute: WrapperPostsRouteWithChildren,
}

const WrapperRouteWithChildren =
  WrapperRoute._addFileChildren(WrapperRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$': typeof SplatRoute
  '': typeof WrapperRouteWithChildren
  '/posts': typeof WrapperPostsRouteWithChildren
  '/posts/$postId': typeof WrapperPostsPostIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$': typeof SplatRoute
  '': typeof WrapperRouteWithChildren
  '/posts': typeof WrapperPostsRouteWithChildren
  '/posts/$postId': typeof WrapperPostsPostIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/$': typeof SplatRoute
  '/_wrapper': typeof WrapperRouteWithChildren
  '/_wrapper/posts': typeof WrapperPostsRouteWithChildren
  '/_wrapper/posts/$postId': typeof WrapperPostsPostIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/$' | '' | '/posts' | '/posts/$postId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/$' | '' | '/posts' | '/posts/$postId'
  id:
    | '__root__'
    | '/'
    | '/$'
    | '/_wrapper'
    | '/_wrapper/posts'
    | '/_wrapper/posts/$postId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SplatRoute: typeof SplatRoute
  WrapperRoute: typeof WrapperRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SplatRoute: SplatRoute,
  WrapperRoute: WrapperRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$",
        "/_wrapper"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$": {
      "filePath": "$.tsx"
    },
    "/_wrapper": {
      "filePath": "_wrapper.tsx",
      "children": [
        "/_wrapper/posts"
      ]
    },
    "/_wrapper/posts": {
      "filePath": "_wrapper/posts.tsx",
      "parent": "/_wrapper",
      "children": [
        "/_wrapper/posts/$postId"
      ]
    },
    "/_wrapper/posts/$postId": {
      "filePath": "_wrapper/posts.$postId.tsx",
      "parent": "/_wrapper/posts"
    }
  }
}
ROUTE_MANIFEST_END */
