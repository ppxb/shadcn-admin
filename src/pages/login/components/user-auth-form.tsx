import { zodResolver } from '@hookform/resolvers/zod'
import type { HTMLAttributes } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import { Icons } from '~/components/custom/icons'
import { PasswordInput } from '~/components/custom/password-input'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { useToast } from '~/components/ui/use-toast'
import { cn } from '~/lib/utils'

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { t } = useTranslation()
  const { toast } = useToast()

  const formSchema = z.object({
    username: z.string().min(1, {
      message: t('settings.login.username.placeholder')
    }).min(4, {
      message: t('settings.login.username.invalid')
    }),
    password: z.string().min(1, {
      message: t('settings.login.password.placeholder')
    }).min(6, {
      message: t('settings.login.password.invalid')
    })
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: 'admin',
      password: '123456'
    }
  })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (params: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    toast({
      title: 'Scheduled: Catch up',
      description: 'Friday, February 10, 2023 at 5:57 PM',
    })
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <div className="grid grid-cols-2 gap-6">
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          preSlot={<Icons.wechat className="h-5 w-5 text-green-500" />}
        >
          {t('settings.brand.wechat')}
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          preSlot={<Icons.google className="h-4 w-4" />}
        >
          {t('settings.brand.google')}
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {t('settings.login.or')}
          </span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormControl>
                    <Input placeholder={t('settings.login.username.placeholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormControl>
                    <PasswordInput placeholder={t('settings.login.password.placeholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button loading={isLoading}>
              {t('settings.login.btn')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
