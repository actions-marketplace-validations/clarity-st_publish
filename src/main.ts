import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as io from '@actions/io'

const isEmptyString = (data: string): boolean =>
    typeof data === 'string' && data.trim().length === 0

async function run(): Promise<void> {
    try {
        const token: string = core.getInput('api-token')
        const service: string = core.getInput('service')
        const path: string = core.getInput('path')
        if (isEmptyString(token)) {
            return Promise.reject(
                new Error("Missing input, 'api-token' must be set")
            )
        }
        if (isEmptyString(service)) {
            return Promise.reject(
                new Error("Missing input, 'service' must be set")
            )
        }
        if (isEmptyString(path)) {
            return Promise.reject(
                new Error("Missing input, 'path' must be set")
            )
        }

        core.debug(`service: ${service} `)
        core.debug(`path: ${path} `)

        const c = await io.which('clarity')
        if (!c) {
            return core.setFailed('Unable to find clarity on the path.')
        }

        const options: exec.ExecOptions = {
            env: {
                CLARITY_API_TOKEN: token
            }
        }

        await exec.exec(
            'clarity',
            ['publish', '--service', service, path],
            options
        )
    } catch (error) {
        if (error instanceof Error) core.setFailed(error.message)
    }
}

run()
