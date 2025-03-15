import platforms from '@/data/platforms';
import APIClient from '@/services/api-client';

import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Platform } from '../entities/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, // 24h
    staleTime: ms('24h'),
    // initialData: { count: platforms.length, results: platforms, next: null },
    initialData: platforms,
  });

export default usePlatforms;
