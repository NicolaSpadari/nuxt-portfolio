export interface Project {
    id: number
    attributes: {
        title: string
        description: string
        createdAt: string
        updatedAt: string
        link: string
        locale: string
        image: {
            data: {
                id: number
                attributes: {
                    name: string
                    alternativeText: string
                    caption: string
                    width: number
                    height: number
                    formats: {
                        thumbnail: {
                            ext: string
                            url: string
                            hash: string
                            mime: string
                            name: string
                            path: string | null
                            size: number
                            width: number
                            height: number
                            provider_metadata: {
                                public_id: string
                                resource_type: string
                            }
                        }
                    }
                    hash: string
                    ext: string
                    mime: string
                    size: number
                    url: string
                    previewUrl: string | null
                    provider: string
                    provider_metadata: {
                        public_id: string
                        resource_type: string
                    }
                    createdAt: string
                    updatedAt: string
                }
            }
        }
        localizations: {
            data: [
                {
                    id: number
                    attributes: {
                        title: string
                        description: string
                        createdAt: string
                        updatedAt: string
                        link: string
                        locale: "it" | "en"
                    }
                }
            ]
        }
    }
}

export interface Competence {
    id: number
    attributes: {
        title: string
        description: string
        createdAt: string
        updatedAt: string
        locale: string
        logo: {
            data: {
                id: number
                attributes: {
                    name: string
                    alternativeText: string
                    caption: string
                    width: number
                    height: number
                    formats: {
                        small: {
                            ext: string
                            url: string
                            hash: string
                            mime: string
                            name: string
                            path: string | null
                            size: number
                            width: number
                            height: number
                            provider_metadata: {
                                public_id: string
                                resource_type: string
                            }
                        }
                        thumbnail: {
                            ext: string
                            url: string
                            hash: string
                            mime: string
                            name: string
                            path: string | null
                            size: number
                            width: number
                            height: number
                            provider_metadata: {
                                public_id: string
                                resource_type: string
                            }
                        }
                    }
                    hash: string
                    ext: string
                    mime: string
                    size: number
                    url: string
                    previewUrl: string | null
                    provider: string
                    provider_metadata: {
                        public_id: string
                        resource_type: string
                    }
                    createdAt: string
                    updatedAt: string
                }
            }
        }
        localizations: {
            data: [
                {
                    id: number
                    attributes: {
                        title: string
                        description: string
                        createdAt: string
                        updatedAt: string
                        locale: string
                    }
                }
            ]
        }
    }
}

export interface Projects {
    data: Project[]
}

export interface Competences {
    data: Competence[]
}
