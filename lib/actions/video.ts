'use server';
import { apiFetch, withErrorHandling ,getEnv} from '@/lib/utils';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { BUNNY } from '@/constants';
import type { VideoDetails } from '@/constants';

import { METHODS } from 'http';

const VIDEO_STREAM_BASE_URL = BUNNY.STREAM_BASE_URL;
const THUMBNAIL_STORAGE_BASE_URL = BUNNY.STORAGE_BASE_URL;
const THUMBNAIL_CDN_URL = BUNNY.CDN_URL;
const BUNNY_LIBRARY_ID = getEnv('BUNNY_LIBRARY_ID');
const ACCESS_KEYS = {
    streamAccessKey: getEnv('BUNNY_STREAM_ACCESS_KEY'),
    storageAccessKey: getEnv('BUNNY_STORAGE_ACCESS_KEY'),
}

const getSessionUserId = async () => {
    const session = await auth.api.getSession({headers: await headers()});
    if (!session) {   
        throw new Error('User not authenticated');
    }   
    return session.user.id;
}

export const getVideoUploadUrl = withErrorHandling(async () => {
    await getSessionUserId();

    const videoResponse = await apiFetch(
        `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos`,
        {
            method: 'POST',
            bunnyType: 'stream',
            body: {
                title: 'New Video',
                collectionId: '',
            },
        }
    );

    const uploadUrl =`${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos/${videoResponse.guid}`; 

    return {
        videoId = videoResponse.guid,
        uploadUrl,
        accessKey: ACCESS_KEYS.streamAccessKey,
    }
});

function getEnv(arg0: string) {
        throw new Error('Function not implemented.');
    }

export const getThumbnailUploadUrl = withErrorHandling(async (videoId: string) => {
    const fileName = `${Date.now()} - ${videoId} - thumbnail`;
    const uploadUrl = `${THUMBNAIL_STORAGE_BASE_URL}/thumbnails/${fileName}`;
    const cdnUrl = `${THUMBNAIL_CDN_URL}/thumbnails/${fileName}`;

    return {
        uploadUrl,
        cdnUrl,
        accessKey: ACCESS_KEYS.storageAccessKey,
      
    }
});

export const saveVideoDetails = withErrorHandling(async (videoDeatails:VideoDetails) => {
const userId = await getSessionUserId();
await apiFetch(
    `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos/${videoDeatails.videoId}`,
    {
        method: 'POST',
        bunnyType: 'stream',
        body: {
            title: videoDetails.title,
            description: videoDetails.description,
            
        },
    }
);
await db.insert('videos').values({})
})
