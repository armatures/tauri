import { TauriConfig } from 'types'
import { inject } from '../template'

module.exports = (args: {
  directory: string
  force: false | 'conf' | 'template' | 'all'
  logging: boolean
  tauriPath?: string
  customConfig?: Partial<TauriConfig>
}): boolean => {
  return inject(
    args.directory,
    'all',
    {
      force: args.force,
      logging: args.logging,
      tauriPath: args.tauriPath
    },
    args.customConfig
  )
}
