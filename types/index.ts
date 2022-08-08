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

export interface IpLocation {
    ip: string
    version: string
    city: string
    region: string
    region_code: string
    country: string
    country_name: string
    country_code: string
    country_code_iso3: string
    country_capital: string
    country_tld: string
    continent_code: string
    in_eu: boolean
    postal: string
    latitude: number
    longitude: number
    timezone: string
    utc_offset: string
    country_calling_code: string
    currency: string
    currency_name: string
    languages: string
    country_area: number
    country_population: number
    asn: string
    org: string
}
