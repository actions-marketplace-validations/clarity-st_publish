import * as core from '@actions/core'
import os from 'os'

// https://downloads.clarity.st/release/${VERSION}/clarity_linux_amd64.zip
export function downloadURL(version: string): string {
    const platform: string = os.platform()
    const arch: string = os.arch()
    core.debug(`platform: ${platform}, arch: ${arch}`)

    const url = `https://downloads.clarity.st/release/${version}/clarity_${platform}_${arch}.zip`
    return url
}
